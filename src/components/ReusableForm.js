import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
    < form onSubmit={props.formSubmissionHandler}>
      <input
      type='text'
      name='name'
      placeholder='Name' />
    <input
      type='text'
      name='description'
      placeholder='Description' />
    <input
      type='number'
      name='quantity'
      placeholder='Quantity' />
    <button type='submit'>{props.buttonText}</button>
  </form>
  </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;