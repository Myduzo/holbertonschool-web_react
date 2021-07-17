import React from 'react'
import PropTypes from 'prop-types'

class CourseListRow extends React.Component {

  headerStyle = { backgroundColor: '#deb5b545' };
  rowStyle = { backgroundColor: '#f5f5f5ab' };
  pick = this.props.isHeader ? this.headerStyle : this.rowStyle;

  render() {
    if (this.props.isHeader) {
      if (!this.props.textSecondCell) {
        return (
          <tr style={this.pick}>
            <th colSpan='2'>{this.props.textFirstCell}</th>
          </tr>
        );
      } else {
        return (
          <tr style={this.pick}>
            <th>{this.props.textFirstCell}</th>
            <th>{this.props.textSecondCell}</th>
          </tr>
        );
      }
    } else {
      return (
        <tr style={this.pick}>
          <td>{this.props.textFirstCell}</td>
          <td>{this.props.textSecondCell}</td>
        </tr>
      );
    }
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequigrey,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

export default CourseListRow;
