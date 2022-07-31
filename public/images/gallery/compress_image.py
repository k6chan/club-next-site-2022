from PIL import Image
import glob, os

size = 500, 500

project_files = glob.glob('*.png') + glob.glob('*.jpg')

for infile in project_files:
    file, ext = os.path.splitext(infile)
    with Image.open(infile) as im:
        im.thumbnail(size)
        im.save(file + "_thumbnail" + ".webp", format="webp")

print("Operation complete.")
