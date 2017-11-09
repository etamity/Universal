### Config Folder
All application specific configuration falls in this folder.

`AppConfig.js` - production values.
`DebugConfig.js` - development-wide globals.
`ReactotronConfig.js` - Reactotron client settings.
`ReduxPersist.js` - rehydrate Redux state.


```

    #if __has_include(<React/RCTBridgeModule.h>)
    #import <React/RCTBridgeModule.h>
    #else
    #import "RCTBridgeModule.h"
    #endif

```
