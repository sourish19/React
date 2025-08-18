# Currency Converter 
### Used Custome Hooks for api call and send a lot of data as props 

App = single source of truth (all state lives here).

Custom hook (useCurrencyInfo) → handles API calls + returns exchange rates.

Controlled Components → both input tag and select tag rely on state, so UI always syncs with logic.

Swap + Convert functions → handle the core currency converter behavior.

