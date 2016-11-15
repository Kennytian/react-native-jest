## React Native Jest

Run `npm test` starting test

Run `npm test -- -u` delete snapshot file


```
it('渲染 ActivityIndicator 组件', () => {
  let ActivityIndicator = require('ActivityIndicator');
  let tree = renderer.create(
    <ActivityIndicator animating={true} size='small' />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


it('渲染 Image 组件', done => {
  const Image = require('Image');
  Image.getSize('avatar.jpeg', (width, height) => {
    const tree = renderer.create(
      <Image style={{width, height}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
});


it('渲染 TextInput 组件', () => {
  let TextInput = require('TextInput');
  let tree = renderer.create(
    <TextInput
      autoCorrect={false}
      value="苹果 香蕉 猕猴桃"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


it('渲染 ListView 组件', () => {
  let ListView = require('ListView');
  let Text = require('Text');
  let dataSource = new ListView.DataSource({
    rowHasChanged : (r1, r2) => r1 !== r2
  }).cloneWithRows([
    '苹果', '香蕉', '猕猴桃'
  ]);
  let tree = renderer.create(
    <ListView dataSource={dataSource} renderRow={(row)=><Text>{row}</Text>} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

```

detail sample: `./__tests__/index.js`