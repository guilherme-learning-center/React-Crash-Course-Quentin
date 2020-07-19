# React Crash Course 2020 (Quentin Watt Tutorials)

## What should you know before learning React?

* JavaScript fundamentals:
  - [x] Objects
  - [x] Arrays
  - [x] Conditionals
* It may help to learn these first:
  - [x] Classes
  - [ ] Destructuring
  - [x] High Order Array Methods - forEach, map, filter
  - [x] Arrow Functions
  - [ ] Fetch API & Promises

## State

* Componentes podem ter estados, que são objetos que determinam como esses componentes são renderizados e como eles se comportam
* We can also have "application level" state by using a state manager like **Redux** or React's own **context API**

```javascript
state = {
	title: 'xxx'
	body: 'yyy'
	isFeatured: true
}
```

## Anatomia de um componente

```javascript
Class Post extends React.Component {
  state = {
    title: 'Post One'
    body: 'This is my post!'
  }
  
  render() {
    return (
    	<div>
      	<h3>{ this.state.title }</h3>
      	<p>{ this.state.body }</p>
      </div>
    )
  }
}
```
