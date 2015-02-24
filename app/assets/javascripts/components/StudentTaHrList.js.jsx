var StudentTaHrList = React.createClass({
  propTypes: {
    ta: React.PropTypes.object,
    helpRequests: React.PropTypes.arrayOf(React.PropTypes.object)
  },

  render: function () {
    var firstName = this.props.ta.first_name;
    var lastName = this.props.ta.last_name;
    var title = "Help Requests for " + firstName + " " + lastName;

    var helpRequests = this.props.helpRequests.map(function (hr) {
      var student = hr.student;
      var firstName = student.first_name;
      var lastName = student.last_name;
      var fullName = firstName + " " + lastName;

      return (
        <div>
          <h4>{hr.description}</h4>
          <h6>Asked by: {fullName}</h6>
        </div>
      );
    });

    return (
      <div>
        <h2>{title}</h2>
        {helpRequests}
      </div>
    );
  }
});
