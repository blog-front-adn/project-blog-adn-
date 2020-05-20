import React, { Fragment } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Nav() {
    return (
        <Fragment>
          

           <div className="mb-2">
    {['Matematika'].map((direction) => (
      <>
        <DropdownButton
          as={"ButtonGroup"}
          key={direction}
          id={`dropdown-button-drop-${direction}`}
          drop={'right'}
          variant="secondary"
          title={`${direction}`}
        > 
   <DropdownButton
          as={"ButtonGrp"}
          key={"1"}
          id={`dropdown-button-drop-${"right"}`}
          drop={"right"}
          variant="secondary"
          title={`  A. Aljabar  `}
        >
          <Dropdown.Item eventKey="1">1. Eksponensial</Dropdown.Item>
          <Dropdown.Item eventKey="2">2. Bentuk akar</Dropdown.Item>
          <Dropdown.Item eventKey="3">3. Logaritma</Dropdown.Item>
          <Dropdown.Item eventKey="4">4. Matriks</Dropdown.Item>
          <Dropdown.Item eventKey="5">5. Persamaan kuadrat</Dropdown.Item>
          <Dropdown.Item eventKey="6">6. Fungsi kuadrat</Dropdown.Item>
          <Dropdown.Item eventKey="7">7. Logika matematika</Dropdown.Item>
          <Dropdown.Item eventKey="8">8. Barisan dan deret</Dropdown.Item>
          <Dropdown.Item eventKey="9">9. Program linear</Dropdown.Item>

          </DropdownButton>

          <DropdownButton
          as={"ButtonGrp"}
          key={"2"}
          id={`dropdown-button-drop-${"right"}`}
          drop={"right"}
          variant="secondary"
          title={`B. Geometri dan Trigonometri`}
        >
          <Dropdown.Item eventKey="1">1. Bangun ruang</Dropdown.Item>
          <Dropdown.Item eventKey="2">2. Trigonometri</Dropdown.Item>
          <Dropdown.Item eventKey="3">3. Koordinat kutub dan kartesius</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
          as={"ButtonGrp"}
          key={"3"}
          id={`dropdown-button-drop-${"right"}`}
          drop={"right"}
          variant="secondary"
          title={`C. Statistika dan Peluang`}
        >
          <Dropdown.Item eventKey="1">1. Peluang</Dropdown.Item>
          <Dropdown.Item eventKey="2">2. Pencacahan</Dropdown.Item>
          <Dropdown.Item eventKey="3">3. Penyajian data tabel</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
          as={"ButtonGrp"}
          key={"4"}
          id={`dropdown-button-drop-${"right"}`}
          drop={"right"}
          variant="secondary"
          title={`D. Kalkulus`}
        >
          <Dropdown.Item eventKey="1">1. Limit fungsi</Dropdown.Item>
          <Dropdown.Item eventKey="2">2. Turunan</Dropdown.Item>
          <Dropdown.Item eventKey="3">3. Integral</Dropdown.Item>
          <Dropdown.Item eventKey="4">4. Garis Singgung</Dropdown.Item>
          <Dropdown.Item eventKey="5">5. Selang Kemonotonan</Dropdown.Item>
          </DropdownButton>
       
        </DropdownButton>
       {'  '}
     </>
    ))}
  </div>

       </Fragment>
    )
}
