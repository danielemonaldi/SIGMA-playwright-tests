## *Playwright E2E Test (SWD)*

### Strumenti e versioni

* [Playwright](https://playwright.dev/) v1.42.1
* Node v20.11.1
* npm v10.2.4

### Contenuto della directory
* `tests/`: contiene le *suites* dei test Playwright. Una suite è un insieme di test raggruppati in un file js.
  * `swd.spec.js`: test della SWD.
* `playwright.config.js`: file di configurazione di Playwright.
* `playwright-report/`: contiene il report HTML dei test generato da Playwright (non servono librerie esterne).
* `ServicePack/`: contiene alcuni file di esempio utilizzati nei test di upload.
  
>Per questioni di grandezza dello zip, dalla directory ServicePack sono stati rimossi alcuni file di esempio pesanti (> 1GB) utilizzati nei test.

### Esecuzione dei test
Utilizzare il comando:
```console
$ npx playwright test --project chrome
```
Oppure i comandi scritti sotto.
___
## Procedura base: installazioni e configurazioni

### Requisiti
* [NodeJs](https://nodejs.org/en/download)

>In questo caso non è necessario eseguire *npm init* all'interno di una directory dedicata ai test, perché l'init è incluso nel comando di installazione del framework

### Installazione di Playwright
[Guida completa](https://playwright.dev/docs/intro)

Eseguire il comando:
```console
$ npm init playwright@latest --save-dev
```

Durante l'esecuzione del comando viene chiesto se si desidera installare i browser insieme al framework. I browser posso essere installati anche separatamente con il comando:
```console
$ npx playwright install
```

Per installare un browser specifico:
```console
$ npx playwright install webkit
```

### Configurazione di Playwright
Attraverso il file `playwright.config.js` è possibile configurare Playwright. Le opzioni di configurazione sono disponibili [qui](https://playwright.dev/docs/test-configuration).

___
## Esecuzione dei test
[Guida completa](https://playwright.dev/docs/running-tests)

> Le suites dei test dovranno avere l'estensione `.spec.js`.

Per eseguire tutti i test sul terminale utilizzare il comando:

```console
$ npx playwright test
```

Questo comando esegue i test su tutti i browser. Per specificare su quale browser si vuole eseguire i test, utilizzare il flag --project seguito dal nome del browser.
```console
$ npx playwright test --project chrome
```

Per eseguire un test specifico utilizzare il comando:
```console
$ npx playwright test home.spec.ts
```

Per eseguire i test in modalità *headed*, utilizzare il flag --headed. Questo darà la possibilità di vedere visivamente come Playwright interagisce con il sito web.
```console
$ npx playwright test --headed
```

Per eseguire i test utilizzando l'App di Playwright con UI:
```console
$ npx playwright test --ui
```

## Report
Playwright ha un sistema di report html integrato. Per visualizzare il report usare il comando
```console
$ npx playwright show-report
```

Il file html del report è presente nella directory `playwright-report`.