弹窗。

## API
| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | Modal是否显示 | bool | false |
| title | 弹窗标题 | string | 'test' |
| cancelText | 取消文案 | string | '取消' |
| confirmText | 确认文案 | string | '确认' |
| cancel | 取消回调 | Function |  |
| confirm | 确认回调 | Function |  |
| children | 内容 | React.node | 

```jsx
  <Modal
    title="hello"
    visible={visible}
    cancel={this.cancel}
    confirm={this.confirm}
  >
    <p>hello</p>
  </Modal>
```