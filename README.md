# hello-npm-ci

## パッケージ側

プロジェクトのディレクトリで次のコマンドを実行

```sh
npm link
```

グローバルインストールされるため、`bin` に書いたコマンドを実行することができる

### 解除するには

```sh
npm unlink -g hello-npm-ci
```

## 参照する側

参照する側のプロジェクトのディレクトリで次のコマンドを実行

```sh
npm link hello-npm-ci@1.0.0
```

```sh
npx my-cli
```

好きに使えるようになる。

### 解除するには

```
npm unlink hello-npm-ci
```