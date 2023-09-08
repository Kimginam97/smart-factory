import { useState } from "react";
import { Form } from 'react-bootstrap'

const OperationalStatusButton = (props) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => setIsChecked(!isChecked);

  const currentFacility = props.currentFacility

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label style={{ fontSize: 'large', color: '#dbcfe1' }}>가동상태</label>
        <Form style={{ display:'flex', alignItems:'center', fontSize: 'xxx-large', pointerEvents: 'none' }}>
          <Form.Check
            type="switch"
            id="custom-switch"
            isValid="true"
            checked={currentFacility.operationStatus}
            onChange={handleToggle}
          />
        </Form>
      </div>
    </>
  )
}

export default OperationalStatusButton
