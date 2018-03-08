import React from 'react'
import Grid from 'material-ui/Grid'
import LocalVarPrefixField from './LocalVarPrefixField'
import FuncTagSelector from './FuncTagSelector'
import DescTagSelector from './DescTagSelector'
import ArgTagSelector from './ArgTagSelector'

const TagMenu = () => (
  <Grid container spacing={0} justify="space-around" alignItems="center">
    <Grid item xs={12} sm={6} md={3}><LocalVarPrefixField/></Grid>
    <Grid item xs={12} sm={6} md={3}><FuncTagSelector/></Grid>
    <Grid item xs={12} sm={6} md={3}><DescTagSelector/></Grid>
    <Grid item xs={12} sm={6} md={3}><ArgTagSelector/></Grid>
  </Grid>
)

export default TagMenu