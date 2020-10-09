// Imports
import React from "react";
import PropTypes from "prop-types";

// Component
const Tile = (props) => {
  const { children, image, width, height, style, shadow, ...others } = props;

  return (
    <div style={Object.assign({ height, width }, style)} {...others}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        div {
          background-image: url("${image}");
          background-size: 100% auto;
          box-shadow: ${shadow ? shadow : "none"};
        }
      `}</style>
    </div>
  );
};

// Component Properties
Tile.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  shadow: PropTypes.string,
};
Tile.defaultProps = {
  style: {},
  width: "100%",
  height: "100%",
};

export default Tile;

// Component for individual images, being used for images on main pages.
// Probably good component for displaying our images in the survey
// Might have to change how the size is made
// Shadow can technically be toggled (useful for clicking in survey)
// shadow level is imported from ../../ui/common/shadows
// width & height are in px
// image property is image url, most examples use ${APP_URL}/something/something
