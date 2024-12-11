# WAT
example mutation testing

# HOW
1. clone
2. npm install
3. npm test
```bash
npm test

> mutation-testing@1.0.0 test
> jest --coverage --testPathIgnorePatterns='/.stryker-tmp/'

 PASS  __tests__/test.js
  ✓ adds 1 + 2 to equal 3 (1 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.js |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.477 s, estimated 1 s
Ran all test suites.
```
Which tels that project is 100% tested

However test are very bad, that 
4. `npx stryker run`
```bash
npx stryker run
15:07:45 (46748) INFO ProjectReader Found 1 of 27 file(s) to be mutated.
15:07:45 (46748) INFO Instrumenter Instrumented 1 source file(s) with 3 mutant(s)
15:07:45 (46748) INFO ConcurrencyTokenProvider Creating 9 test runner process(es).
15:07:46 (46748) INFO DryRunExecutor Starting initial test run (jest test runner with "perTest" coverage analysis). This may take a while.
15:07:46 (46748) INFO DryRunExecutor Initial test run succeeded. Ran 1 tests in 0 seconds (net 1 ms, overhead 852 ms).
Mutation testing  [] 33% (elapsed: <1m, remaining: n/a) 1/3 Mutants tested (1 sMutation testing  [] 100% (elapsed: <1m, remaining: n/a) 3/3 Mutants tested (3 survived, 0 timed out)

All tests/test.js
  ~ adds 1 + 2 to equal 3 [line 3] (covered 2)

[Survived] ArithmeticOperator
src/index.js:3:3
-     a + b + 7
+     // here is 1000 lines of async code that dont do much
+   a + b - 7
Tests ran:
    adds 1 + 2 to equal 3


[Survived] ArithmeticOperator
src/index.js:3:3
-     a + b + 7
+     a - b + 7
Tests ran:
    adds 1 + 2 to equal 3


[Survived] ArrowFunction
src/index.js:1:13
-   const add = (a, b) =>
-      // here is 1000 lines of async code that dont do much
-     a + b + 7
+   const add = () => undefined
Ran all tests for this mutant.

Ran 1.00 tests per mutant on average.
----------|------------------|----------|-----------|------------|----------|----------|
          | % Mutation score |          |           |            |          |          |
File      |  total | covered | # killed | # timeout | # survived | # no cov | # errors |
----------|--------|---------|----------|-----------|------------|----------|----------|
All files |   0.00 |    0.00 |        0 |         0 |          3 |        0 |        0 |
 index.js |   0.00 |    0.00 |        0 |         0 |          3 |        0 |        0 |
----------|--------|---------|----------|-----------|------------|----------|----------|
15:07:47 (46748) INFO HtmlReporter Your report can be found at: file:///Users/lukaszgintowt/endress/mutation-testing/reports/mutation/mutation.html
15:07:47 (46748) INFO MutationTestExecutor Done in 2 seconds.
```
Clearly shows that tests are `weak`.
5. Bonus
