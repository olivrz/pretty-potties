import im1 from '../../public/gallery-images/image1.jpg'
import im2 from '../../public/gallery-images/image2.jpg'

import Image from 'next/image'

export default function Gallery() {

    return (
        <div className="page gallery">
            <Image className="galleryImage"
                src={im1}
                alt="Cabin trailer"
            />
            <Image className="galleryImage"
                   src={im2}
                   alt="Bathroom interior"
            />
        </div>
    )
}