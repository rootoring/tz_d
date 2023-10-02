import apiData from "../api";

export const plugin = {
  install: (app) => {
    app.provide('api', apiData())
  }
}