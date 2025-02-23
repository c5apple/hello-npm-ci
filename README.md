# hello-npm-ci

## 利用するには

- 1.npmに公開する
- 2.githab/gitlabにpushする
- 3.ローカル内で完結


## 1. npmに公開する

### パッケージ側

```sh
npm publish
```

※オプションは割愛

### 参照する側

```sh
npm install hello-npm-ci
```

## 2. githab/gitlabにpushする

### パッケージ側

通常のgit利用するのみでOK

```sh
git push
```

### 参照する側

※gitlabの場合は読み替えること

```sh
npm install github:c5apple/hello-npm-ci
```

#をつけることで、ブランチ・コミットハッシュ・タグを指定することができる

```sh
npm install github:c5apple/hello-npm-ci#branch-name

npm install github:c5apple/hello-npm-ci#<commit-hash>

npm install github:c5apple/hello-npm-ci#v1.0.2
```

self-hostedの場合はURLを直接指定する

```sh
npm install git+https://domain/c5apple/hello-npm-ci.git
```


## 3. ローカル内で完結

### 参照する側

プロジェクトのディレクトリで次のコマンドを実行

```sh
npm link
```

グローバルインストールされるため、`bin` に書いたコマンドを実行することができる

解除するには unlink コマンドを実行する

```sh
npm unlink -g hello-npm-ci
```

### 参照する側

参照する側のプロジェクトのディレクトリで次のコマンドを実行

```sh
npm link hello-npm-ci@1.0.0
```

```sh
npx my-cli
```

解除するには unlink コマンドを実行する

```
npm unlink hello-npm-ci
```
