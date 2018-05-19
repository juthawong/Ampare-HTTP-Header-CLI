##  Ampare HTTP Header
Get HTTP Response Header and Opt-In Body From CLI

Powered By Nodejs


#### How To Install
```
npm i -g amparehttpheader
``` 

### How To Use
Very Simple Usage :

```bash
httpheader http://www.example.com
```

Opt-In Body - I want The HTTP Response Body Also

```shell
httpheader --body http://www.example.com
```


### Common Error Message


```shell
TypeError: Cannot read property 'headers' of undefined

```
This Error mean connection cannot be reached. Please check your Network Connection or make sure typing url correctly.

For Example : example.com instead of http://example.com will cause this error.