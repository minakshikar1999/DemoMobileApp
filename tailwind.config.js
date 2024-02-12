/** @type {import('tailwindcss').Config} */
// import y from './component/PendingTask/PendingTask.js'
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", 
  "./component/PendingTask/PendingTask.{js,jsx,ts,tsx}",
  "./component/SignIn/Signin.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

