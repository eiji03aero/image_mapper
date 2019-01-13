## ImageMapper


### Feature

- creates rects
- drag/remove rects
- edit the content for rects
  - url, message
- remove all the rects
- (re)upload image


### Component structure

- ImageMapper
  - [imageMapper.isStandby &&
    - Standby
  ,
    - Canvas
      - BackdropImage
      - [ AreaRect ]
  ]
  - RectContentEditor
  - Menu
  - FileInput

### Domain models
- ImageMapper
- Canvas
- AreaRect
- BackdropImage
- RectContentEditor
- Menu

### Architecture
- Domain model
- Container component
  - Context consumer
- Context provider
- UI component

- steps
  - Descendents receive state and methods from the outtest container thrugh context
  - Descendents dispatch methods
  - trigger domain model's methods to change its internal state
  - trigger setState with updated domain model


### Data
```
ImageMapper {
  appStatus: <enum Standby
    | CreateRect
    | EditRect
    | EditRectContent
    >,
  canvas: Canvas,
  rects: [ AreaRects ],
  backdropimage: BackdropImage,
  contentEditor: RectContentEditor,
  menu: Menu,
}

Canvas {
}

AreaRects {
  status: <enum Created | Valid | Invalid>,
  x1: <number>,
  x2: <number>,
  y1: <number>,
  y2: <number>,
  content: {
    type: <enum Url | Message>,
    text: <string>,
  }
}

BackdropImage {
  imageUrl: <string>,
  imageFile: <string>,
  width: <number>,
  height: <number>,
  naturalWidth: <number>,
  naturalHeight: <number>,
}

RectContentEditor {
  rect: Rect,
  valid: <boolean>,
}

Menu {
}
```
