export class BackdropImage {
  constructor () {
    this.imageUrl = null;
    this.imageFile = null;
    this.width = 0;
    this.height = 0;
    this.naturalWidth = 0;
    this.naturalHeight = 0;
  }

  get ratio () { return this.naturalWidth / this.naturalHeight; }

  setImageFile (file) {
    this.imageFile = file;
    this.imageUrl = URL.createObjectURL(file);

    const temp = new Image();
    temp.onload = () => {
      this.naturalWidth = temp.naturalWidth;
      this.naturalHeight = temp.naturalHeight;
    };
    temp.src = this.imageUrl;
  }

  setDimention ({ width, height }) {
    this.width = width;
    this.height = this.width / this.ratio;
  }
}
