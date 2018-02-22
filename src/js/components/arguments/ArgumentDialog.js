import React, { Component } from 'react'
import Dialog, {DialogTitle, DialogContent, DialogActions} from 'material-ui/Dialog'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import Paper from 'material-ui/Paper'
import Transition from '../Transition'

import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'

const suggestions = [
  { label: 'real' },
  { label: 'string' },
  { label: 'boolean' },
  { label: 'array' },
  { label: 'pointer' },
  { label: 'enum' },
  { label: 'matrix' },
  { label: 'list' },
  { label: 'queue' },
  { label: 'grid' },
  { label: 'priority' },
  { label: 'stack' },
  { label: 'map' },
  { label: 'surface' },
  { label: 'buffer' } 
]

function renderInput(inputProps) {
  const { ref, ...other} = inputProps

  return (
    <TextField
      label="Type"
      fullWidth
      inputRef={ref}
      InputProps={{
        ...other
      }}
    />
  )
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query)
  const parts = parse(suggestion.label, matches)

  return (
    <MenuItem selected={isHighlighted} component='div'>
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          )
        })}
      </div>
    </MenuItem>
  )
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options

  return (
    <Paper { ...containerProps } square>
      {children}
    </Paper>
  )
}

function getSuggestionValue(suggestion) {
  return suggestion.label
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length
  let count = 0

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
      const keep = 
        count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue

      if (keep) {
        count++
      }

      return keep
    })
}

class ArgumentDialog extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: '',
      suggestions: []
    }

    this.handleSuggestionsFetchRequested = this.handleSuggestionsFetchRequested.bind(this)
    this.handleSuggestionsClearRequested = this.handleSuggestionsClearRequested.bind(this)
    this.handleGetSuggestion = this.handleGetSuggestion.bind(this)
    this.handleSumbit = this.handleSubmit.bind(this)
  }

  handleSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  handleSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    })
  }

  handleGetSuggestion(suggestion) {
    let newValue = getSuggestionValue(suggestion)
    this.props.onChange({
      target: {
        value: newValue,
        id: 'type'
      }})
    return newValue
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {

    // Check if argInfo exists before displaying its info in the dialog
    let displayInfo = this.props.argInfo ? this.props.argInfo : {name: '', type: '', description: ''}
    
    return (
      <Dialog 
        open={this.props.isOpen}
        onClose={this.props.onClose}
        transition={Transition}
        keepMounted
        fullWidth
      >
        <DialogTitle>{displayInfo.name} Details</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <Autosuggest
                renderInputComponent={renderInput}
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                renderSuggestionsContainer={renderSuggestionsContainer}
                getSuggestionValue={this.handleGetSuggestion}
                renderSuggestion={renderSuggestion}
                inputProps={{
                  id: 'type',
                  ref: 'autosuggest',
                  value: displayInfo.type,
                  onChange: this.props.onChange
                }}
              />
            </form>
            <TextField
              id="description"
              label="Description"
              value={displayInfo.description}
              onChange={this.props.onChange}
              fullWidth
            />
          </DialogContent>
        <DialogActions>
          <IconButton 
            color="primary"
            size="small"
            onClick={this.props.onRemove}
          >
            <Icon>delete_forever</Icon>
          </IconButton>
          <IconButton 
            color="primary"
            size="small"
            onClick={this.props.onClose}
          >
            <Icon>done</Icon>
          </IconButton>
        </DialogActions>
      </Dialog>
    )
  }
}

export default ArgumentDialog