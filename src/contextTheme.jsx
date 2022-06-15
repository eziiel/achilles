import React from "react";

const ContextTheme = React.createContext()


const ProviderContextTheme = ({children}) => {
  const [statusTheme, setStatusTheme] = React.useState(false)



  const data = {statusTheme, setStatusTheme}

return (
  <ContextTheme.Provider value={data}>
    {children}
  </ContextTheme.Provider>
)

}

export {
  ContextTheme,
  ProviderContextTheme,
}