import PhotoGalleryTile from './tile';
import { data } from './data';

export default function PhotoGalleryShowcase() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-14 " id='photoGallery'>
          Photo Gallery
        </h1>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            auto-rows-[250px]
            gap-4
          ">
          {/* 1 */}
          <div>
            <PhotoGalleryTile {...data[0]} />
          </div>

          {/* 2 */}
          <div>
            <PhotoGalleryTile {...data[1]} />
          </div>

          {/* 3 (Hero) */}
          <div className="row-span-2">
            <PhotoGalleryTile {...data[2]} />
          </div>

          {/* 4 */}
          <div>
            <PhotoGalleryTile {...data[3]} />
          </div>

          {/* 5 */}
          <div>
            <PhotoGalleryTile {...data[4]} />
          </div>

          {/* 6 */}
          <div>
            <PhotoGalleryTile {...data[5]} />
          </div>

          {/* 7 */}
          <div>
            <PhotoGalleryTile {...data[6]} />
          </div>

          {/* 8 */}
          <div>
            <PhotoGalleryTile {...data[7]} />
          </div>
        </div>
      </div>
    </section>
  );
}