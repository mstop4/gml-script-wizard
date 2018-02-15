import React, { Component } from 'react'
import Dialog, {DialogTitle, DialogContent, DialogActions} from 'material-ui/Dialog'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import Paper from 'material-ui/Paper'

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
  { label: 'matrix' }
]

function renderInput(inputProps) {
  const { classes, ref, ...other} = inputProps

  return (
    <TextField
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

  render() {
    return (
      <Dialog 
        open={this.props.isOpen}
        onClose={this.props.onClose}
      >
        <DialogTitle>{this.props.argInfo.name} Details</DialogTitle>
          <DialogContent>
            <Autosuggest
              renderInputComponent={renderInput}
              suggestions={this.state.suggestions}
              onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
              renderSuggestionsContainer={renderSuggestionsContainer}
              getSuggestionValue={this.handleGetSuggestion}
              renderSuggestion={renderSuggestion}
              inputProps={{
                id: "type",
                label: "Type",
                value: this.props.argInfo.type,
                onChange: this.props.onChange
              }}
            />
            <TextField
              id="description"
              label="Description"
              value={this.props.argInfo.description}
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