import piexif, os
from PIL import Image

dir = "images/Upload"

def compress(img):
    image = Image.open(img)
    image.save(img, optimize=True, quality=50)

files = os.listdir(dir)
files = [f for f in files if os.path.isfile(dir+'/'+f)]
for file in files:
    exif_dict = piexif.load(f"{dir}/{file}")
    if "GPS" in exif_dict and len(exif_dict["GPS"]) > 0:
        exif_dict["GPS"] = {}
        exif_bytes = piexif.dump(exif_dict)
        piexif.insert(exif_bytes, f"{dir}/{file}")
    compress(f"{dir}/{file}")