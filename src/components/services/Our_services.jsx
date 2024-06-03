// import React from 'react'

import { Link } from "react-router-dom";
import FreeInspec from "../../assets/freeInspec.svg"
import commercialRoofing from "../../assets/commercialRoofing.svg"
import damageRepair from "../../assets/damageRepair.svg"
import RoofingReplacement from "../../assets/RoofingReplacement.svg"
import RoofRenovation from "../../assets/RoofRenovation.svg"
import SolarPanel from "../../assets/SolarPanel.svg"

export default function Our_services() {
  return (

    <>
        <section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <Link to={"/"} className="block border border-teal-200 p-5 rounded-md shadow-md">
                <img
                    alt="FreeInspec"
                    src={FreeInspec}
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Free Inspection</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                    Our team is experienced in handling everything repairs.
                </p>
            </Link>

            <Link to={"/"} className="block border border-teal-200 p-5 rounded-md shadow-md">
                <img
                    alt="commercialRoofing"
                    src={commercialRoofing}
                
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Commercial Roofing</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                    Our team is experienced in handling everything repairs.
                </p>
            </Link>

            <Link to={"/"} className="block border border-teal-200 p-5 rounded-md shadow-md">
                <img
                    alt="RoofingReplacement"
                    src={RoofingReplacement}
                
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Roof Replacement</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                    Our team is experienced in handling everything repairs.
                </p>
            </Link>

            <Link to={"/"} className="block border border-teal-200 p-5 rounded-md shadow-md">
                <img
                    alt="SolarPanel"
                    src={SolarPanel}
                
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Solar Panels</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                    Our team is experienced in handling everything repairs.
                </p>
            </Link>

            <Link to={"/"} className="block border border-teal-200 p-5 rounded-md shadow-md">
                <img
                    alt="damageRepair"
                    src={damageRepair}
                
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Damage Repairs</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                    Our team is experienced in handling everything repairs.
                </p>
            </Link>


            <Link to={"/"} className="block border border-teal-200 p-5 rounded-md shadow-md">
                <img
                    alt="RoofRenovation"
                    src={RoofRenovation}
                    
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Roof Renovation</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                    Our team is experienced in handling everything repairs.
                </p>
            </Link>

          </div>

        </section>
    </>

  )
}
