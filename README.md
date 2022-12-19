### PetsPaw using Vue.js 3 (tailwind)

[Link to figma template](https://www.figma.com/file/ejuTUhJrZR0IjQdAB9OnWa/MSI-2021---Frontend?node-id=0%3A1&t=EEPC5cyEOaCWvf5s-0)


### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Vue project structure

    dts                                # definition files
    │
    public                             # public resources
    │
    src
    ├── assets
    │   │── images                     # global images 
    │   └── styles                     # scss styles including element-reset, tailwind, etc.
    │ 
    ├── components
    │   ├── editor                     # BusinessLogic component, shared acrosss the application which require a folder
    │   │   ├── Editor.vue             # Main editor component         
    │   │   ├── EditorBar.vue    
    │   │   └── editor.ts              # Additional logic of Editor component, should be outsourced to ts file
    │   ├── Avatar.vue
    │   ├── Pagination.vue
    │   ├── Tabs.vue
    │   └── MenuList.vue               # Generic Menu List
    │  
    ├── composables                    # Composition functions used for logic sharing. Can include vue related methods or be just a pure helper function
    │   ├── useFormConfig.ts           # Set of helpers function related to forms and their validation
    │   └── useGlobalProperties.ts     # Composable for getting global properties from Vue instance
    │  
    ├── layouts                        # Nuxt-like layouts
    │   ├── BlankLayout.vue            # Blank layout (no header, no sidebar)
    │   └── DefaultLayout.vue          # Default layout for most of the pages
    │ 
    ├── plugins                    
    │   ├── index.ts                   # exports all plugins
    │   ├── i18n                       # Library for internationalization
    │   ├── portal                     # Set of components for dynamic dom elements teleportation
    │   ├── vue-global-properties      # Plugin for adding something to the vue global properties
    │ 
    ├── router         
    │   ├── index.ts                   # Exports router, invokes guards
    │   ├── route-guard.ts             # Declares all router guards
    │   ├── route-names.ts             # Declares all route names object
    │   └── routes.ts                  # Declares all routes
    │ 
    ├── services     
    │   ├── index.ts                   # Export * from all services accross an app (not needed if using auto-imports)
    │   ├── api.service.ts             # Axios config, interceptors. If needed may be moved to folder
    │   ├── tags.service.ts            # Tags service - tags used across the app and doesn't have own page
    │   └── auth.service.ts            # Auth service - user data, tokens used across the app, sidebar, settings
    │ 
    ├── store
    │   ├── modules                        
    │       ├── tags.store.ts          # Tags module - tags used across the app and doesn't have own page
    │       └── auth.store.ts          # Auth module - user data, tokens used across the app, sidebar, settings
    │   ├── create-store.ts            # Initializes store
    │   ├── index.ts                   # Exports all modules (not needed if using auto-imports)
    │ 
    ├── types
    │   ├── general.d.ts               # Some general types used everywhere in the project
    │   ├── index.ts                   # Exports all types
    │ 
    ├── views
    │   ├── settings     
    │   │   ├── components  
    │   │   │   └── SettingsFilter.vue # Components, related only to settings pages        
    │   │   ├── settings.routes.ts     # Route file with declaration for all settings pages.
    │   │   ├── settings.service.ts    # Service with API for settings pages 
    │   │   ├── settings.d.ts          # Types for settings pages 
    │   │   ├── settings.translations.ts # Settings specific types
    │   │   ├── settings.store.ts      # Store for all settings pages
    │   │   ├── Settings.vue           # Settings root page
    │   │   └── SettingsDetails.vue    # SettingsDetails page
    │   └── users       
    │   │   ├── users.routes.ts     
    │   │   ├── users.service.ts   
    │   │   ├── users.d.ts   
    │   │   ├── users.store.ts  
    │   │   ├── Users.vue  
    │   │   └── UserDetails.vue  
    └── ...
