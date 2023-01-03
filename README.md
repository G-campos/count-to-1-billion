# Instruction for running

## C++
```bash
$ g++ c_count.cpp && time ./a.out
```

## Golang
```bash
$ go build go_count.go && time ./go_count
```

## Python
```bash 
$ time python py_count.py
```

## NodeJS
```bash 
$ time node javascript_count.js
```

## DenoJS
```bash 
$ time deno run javascript_count.js
```

## PHP
```bash 
$ time php php_count.php
```

## Kotlin
```bash 
$ kotlinc kotlin_count.kt -include-runtime -d builds/kotlin_count.jar && time java -jar builds/kotlin_count.jar
```

## Java
```bash 
$ time java java_count.java
```
