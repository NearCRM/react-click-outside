
# ClickOutside

React click outside component.

## Installation

```
$ npm install folkapp/react-click-outside
```

## Props

ClickOutside takes to props:
- `onClickOutside` (*required*): function that closes the `<ClickOutside />` element
- `exceptions`: an array of references that forces to execute the `onClickOutside` prop (ie. the element that opens it in the first place)

## Example

```js
<div
  ref={(ref) => this.setState({except: ref})}
  onClick={handleOpening}
>
  Open the menu or something
</div>
<ClickOutside
  onClickOutside={::this.close}
  exceptions={[this.state.except]}
>
  <p>Im a menu or something that you want to hide when clicking outside.</p>
</ClickOutside>
```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> [tjholowaychuk.com](http://tjholowaychuk.com) &nbsp;&middot;&nbsp;
> GitHub [@tj](https://github.com/tj) &nbsp;&middot;&nbsp;
> Twitter [@tjholowaychuk](https://twitter.com/tjholowaychuk)
