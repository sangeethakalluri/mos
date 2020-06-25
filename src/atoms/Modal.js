import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#000",
    border: "2px solid #FFF",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  iconstyle: {
    cursor: "pointer",
  },
}));

function VariationModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.openModal);

  const handleClose = () => {
    setOpen(false);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="row ">
              <div className="col-12 d-flex justify-content-end">
                <CloseOutlinedIcon
                  onClick={handleClose}
                  className={classes.iconstyle}
                />
              </div>
              <div className="col-12 ">
                <div className="row mb-1 ml-0">
                  <div className=" col-12 p-0">
                    <h5 className={classes.fontcolor}>SELECT AN OPTION</h5>
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col-12">
                    <button class="btn btn-lg p-0 w-100  option-selection">
                      <div class="row card flex-row m-0 ">
                        <div className="  col-md-4 col-4 padding-0">
                          <img
                            src="//s7img.ftdi.com/is/image/ProvideCommerce/BD2D_LOL?$ftd-tile-wide-mv-new$"
                            className="variation-img card-img-left rounded float-left my-3"
                            alt="variation_image"
                          />
                        </div>
                        <div className="col-md-4 col-4">
                          <p className="mt-4 variationType">Better</p>
                          <p className="text-color-grey">Full and Lush</p>
                        </div>
                        <div className="col-md-4 col-4 mt-4 text-right pr-3">
                          <p className="variationPrice">$65</p>
                          <a href="#s">view details</a>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col-12">
                    <button class="btn btn-lg p-0 w-100 option-selection">
                      <div class="row card flex-row m-0">
                        <div className="  col-md-4 col-4 padding-0">
                          <img
                            src="//s7img.ftdi.com/is/image/ProvideCommerce/BD2D_LOL?$ftd-tile-wide-mv-new$"
                            className="variation-img card-img-left rounded float-left my-3"
                            alt="variation_image"
                          />
                        </div>
                        <div className="col-md-4 col-4">
                          <p className="mt-4 variationType">Best</p>
                          <p className="text-color-grey">Full and Lush</p>
                        </div>
                        <div className="col-md-4 col-4 mt-4 text-right pr-3">
                          <p className="variationPrice">$75</p>
                          <a href="#s">view details</a>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                {/* <div className="row card flex-row mb-2">
                                    <div className="  col-md-4 col-4 padding-0">
                                        <img src="//s7img.ftdi.com/is/image/ProvideCommerce/BD2D_LOL?$ftd-tile-wide-mv-new$"
                                            className="variation-img card-img-left rounded float-left my-3" alt="variation_image" />

                                    </div>
                                    <div className="col-md-4 col-4">
                                        <p className="mt-4 variationType">Better</p>
                                        <p className="text-color-grey">Full and Lush</p>
                                    </div>
                                    <div className="col-md-4 col-4 mt-4 text-right pr-3">
                                        <p className="variationPrice">$65</p>
                                        <a href="#s">view details</a>
                                    </div>
                                </div> */}
                {/* <div className="row card flex-row mb-2">
                                    <div className=" col-md-4 col-4 padding-0">
                                        <img src="//s7img.ftdi.com/is/image/ProvideCommerce/BD2D_LOL?$ftd-tile-wide-mv-new$"
                                            className="variation-img  rounded  my-3" alt="variation_image" />

                                    </div>
                                    <div className=" col-md-4 col-4">
                                        <p className="mt-4 variationType">Best</p>
                                        <p className="text-color-grey">Full and Lush</p>
                                    </div>
                                    <div className=" col-md-4 col-4 mt-4 text-right pr-3">
                                        <p className="variationPrice">$75</p>
                                        <a href="#s">view details</a>
                                    </div>
                                </div> */}
                <div class="row">
                  <div class="offset-3 col-7 text-center">
                    <Link to="/delivery">
                      <button type="button" class="btn customise-btn">
                        CHECKOUT
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default VariationModal;
