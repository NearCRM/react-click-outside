import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ClickOutside extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired,
    exceptions: PropTypes.array
  }

  constructor(props) {
    super(props)
    this.isTouch = false
  }

  render() {
    const { children, onClickOutside, exceptions, ...props } = this.props
    return <div {...props} ref={ref => this.container = ref}>{children}</div>
  }

  componentDidMount() {
    document.addEventListener('touchend', this.handle, true)
    document.addEventListener('click', this.handle, true)
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.handle, true)
    document.removeEventListener('click', this.handle, true)
  }

  handle = e => {
    if (e.type === 'touchend') this.isTouch = true
    if (e.type === 'click' && this.isTouch) return
    const {onClickOutside, exceptions} = this.props
    let onException = false
    if (exceptions) {
      onException = exceptions.some((ref) => ref && ref.contains(e.target))
    }
    const el = this.container
    if (!el.contains(e.target) && !onException) onClickOutside(e)
  }
}
