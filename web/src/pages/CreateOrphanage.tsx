import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { FiPlus } from 'react-icons/fi'
import Sidebar from '../components/Sidebar'
import mapIcon from '../utils/mapIcon'
import { LeafletMouseEvent } from 'leaflet'

import '../styles/pages/create-orphanage.css'
import api from '../services/api'

export default function CreateOrphanage() {
  const history = useHistory()

  const [position, setPostion] = useState({ latitude: 0, longitude: 0 })
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(true)

  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng

    setPostion({
      latitude: lat,
      longitude: lng,
    })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const { latitude, longitude } = position

    const data = new FormData()

    data.append('name', name)
    data.append('about', about)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))

    images.forEach((image) => {
      data.append('images', image)
    })

    await api.post('orphanages', data)

    alert('Successful registration')

    history.push('/app')
  }

  function handleSelectImage(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return
    }

    const selectedImages = Array.from(e.target.files)

    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectedImagesPreview)
  }

  return (
    <div id='page-create-orphanage'>
      <Sidebar />
      <main>
        <form onSubmit={handleSubmit} className='create-orphanage-form'>
          <fieldset>
            <legend>Register</legend>

            <Map
              center={[53.3229342, -6.2772248]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className='input-block'>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='input-block'>
              <label htmlFor='about'>
                About <span>Max 300 characters</span>
              </label>
              <textarea
                id='name'
                maxLength={300}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>

            <div className='input-block'>
              <label htmlFor='images'>Photos</label>

              <div className='images-container'>
                {previewImages.map((image) => {
                  return <img key={image} src={image} alt={name} />
                })}
                <label className='new-image' htmlFor='image[]'>
                  <FiPlus size={24} color='#15b6d6' />
                </label>
              </div>

              <input
                type='file'
                id='image[]'
                multiple
                onChange={handleSelectImage}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visit</legend>

            <div className='input-block'>
              <label htmlFor='instructions'>Instructions</label>
              <textarea
                id='instructions'
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>

            <div className='input-block'>
              <label htmlFor='opening_hours'>Opening times</label>
              <input
                id='opening_hours'
                value={opening_hours}
                onChange={(e) => setOpeningHours(e.target.value)}
              />
            </div>

            <div className='input-block'>
              <label htmlFor='open_on_weekends'>Open on weekends?</label>

              <div className='button-select'>
                <button
                  type='button'
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Yes
                </button>
                <button
                  type='button'
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  No
                </button>
              </div>
            </div>
          </fieldset>

          <button className='confirm-button' type='submit'>
            Confirm
          </button>
        </form>
      </main>
    </div>
  )
}
