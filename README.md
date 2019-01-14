## ImageMapper
- Interactive editor for mapping rects on images

### Feature
- creates rects
- drag/remove rects
- edit the content for rects
  - url, message
- remove all the rects
- (re)upload image


### Component structure
- ImageMapper
  - imageMapper.isStandby &&
    - Standby
  - ( imagemapper.isEditRect || imageMapper.isEditRectContent ) &&
    - Canvas
      - BackdropImage
      - [ AreaRect ]
  - RectContentEditor
  - Menu
  - FileInput

### Domain models
- ImageMapper
  - AreaRectCollection
    - [ AreaRect ]
  - BackdropImage

### Architecture
- Domain model
- Context provider
- Container component
  - Context consumer
    - UI component

#### steps
  - Descendents receive state and methods from the outtest container via context
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
  areaRectCollection: AreaRectCollection,
  backdropimage: BackdropImage,
}

AreaRectCollection {
  createStartPoint: { x: <number>, y: <number> },
  draggingPoint: { x: <number>, y: <number> },
  areaRects: [ AreaRect ],
}

AreaRect {
  status: <enum Creating | Valid | Invalid>,
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
```
