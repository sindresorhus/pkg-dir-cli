# pkg-dir-cli [![Build Status](https://travis-ci.org/sindresorhus/pkg-dir-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/pkg-dir-cli)

> Find the root directory of an npm package


## Install

```
$ npm install --global pkg-dir-cli
```


## Usage

```
$ pkg-dir --help

  Usage
    $ pkg-dir <cwd>

  Examples
    $ echo $PWD
    /Users/sindresorhus/foo/bar
    $ pkg-dir
    /Users/sindresorhus/foo
```


## Example

```
/
└── Users
    └── sindresorhus
        └── foo
            ├── package.json
            └── bar
                └── example.js
```

```
$ echo $PWD
/Users/sindresorhus/foo/bar
$ pkg-dir
/Users/sindresorhus/foo
```


## Related

- [pkg-dir](https://github.com/sindresorhus/pkg-dir) - API for this module
- [find-up-cli](https://github.com/sindresorhus/find-up-cli) - Find a file by walking up parent directories


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
