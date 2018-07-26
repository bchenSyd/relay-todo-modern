# What's a Library Definition
> https://flow.org/en/docs/libdefs/#toc-what-s-a-library-definition
These special files use the same `.js` extension as normal JS code, 
but they are placed in a directory called flow-typed in the root directory of your project. 

Placement in this directory tells Flow to interpret them as libdefs rather than normal JS files.

# install flow-typed
`yarn global add flow-typed`

# install third party flow type annotations
`flow-typed install redis@^2.8.0`


