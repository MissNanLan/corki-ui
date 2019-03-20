图形验证码。

## API
| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| getNumbers | 获取验证码 | Array |  |
| height | 高度 | string | '40' |
| width | 宽度 | string | '192' |

```jsx
  <VerificationCode getNumbers={this.getNumbers.bind(this)} height="40" width="192" />
```