import React from "react"
import ReactDOM from "react-dom"

import { App } from "@app"

import "./index.css"

const render = () => {
    ReactDOM.render(React.createElement(App), document.getElementById("root"))
}

render()

if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("@app", render)
}
