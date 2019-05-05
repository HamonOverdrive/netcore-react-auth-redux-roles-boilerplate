# Boilerplate for netcore react front end
This Boilerplate includes netcore react autho redux roles for a web application and uses jwt for auth.


## Boilerplate setup
Unsure if this fix is optimal but it will work
Need to update all packages using ncu -u and npm install new babel to use babel 7


```bash
npm install --save-dev @babel/plugin-proposal-class-properties @babel/core @babel/preset-env @babel/preset-react
```

## babelrc
Your babelrc folder should look like
```
{
  "presets": [
    "@babel/react",
    "@babel/preset-env",
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}
```

after this application should working with current build
## Helpful links and notes
- Tip: TO add admin features create seed file and search for the name you want to make an admin and assign the admin through the seed file




## License
[MIT](https://choosealicense.com/licenses/mit/)
