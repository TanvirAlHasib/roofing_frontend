// import React from 'react'

import FAQ from "../components/FAQ";
import Form from "../components/contact/Form";
// for leaflet map
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Contact() {

  return (

    <>
        <section>

            <div className="w-[80%] mx-auto py-20">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">

                    <div className="flex flex-col gap-5 justify-center">

                        <h1 className="text-7xl text-gray-800 font-bold w-[75rem]">Any doubts? <br/> Feel free to contact us.</h1>

                        <p className="text-xl text-gray-600">If you&apos;re looking to describe your contact information in a resume, <br/> here are some tips that might help you.</p>
                    </div>

                    <Form/>

                </div>

            </div>

            {/* frequently asked questions section start */}

            <section>

                <MapContainer center={[52.22, 4.53]} zoom={18} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[52.22, 4.53]}>
                        <Popup>
                            Roofer company headquater 🏢
                        </Popup>
                    </Marker>
                </MapContainer>

                <FAQ/>

            </section>

            {/* frequently asked questions sections end */}

        </section>
    </>

  )
}
