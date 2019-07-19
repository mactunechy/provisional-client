import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import NotesIcon from 'mdi-react/NotesIcon';
import QuestionAnswerIcon from 'mdi-react/QuestionAnswerIcon';
import TestIcon from 'mdi-react/TestTubeIcon';
import DashIcon from 'mdi-react/ChartPieIcon';
import PersonCardDetailsIcon from 'mdi-react/PersonCardDetailsIcon';
class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const {onClick} = this.props;
    onClick ();
  };

  render () {
    const {changeToDark, changeToLight} = this.props;
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink
            title="Dashboard"
            icon={<DashIcon />}
            route="/dashboard"
            onClick={this.hideSidebar}
          />
          {/* <SidebarCategory title="Layout" icon="layers">
            <button type="button" className="sidebar__link" onClick={changeToLight}>
              <p className="sidebar__link-title">Light Theme</p>
            </button>
            <button type="button" className="sidebar__link" onClick={changeToDark}>
              <p className="sidebar__link-title">Dark Theme</p>
            </button>
          </SidebarCategory> */}
        </ul>
        {/* <ul className="sidebar__block">
          <SidebarCategory title="Example Pages" icon="diamond">
            <SidebarLink title="Page one" route="/pages/one" onClick={this.hideSidebar} />
            <SidebarLink title="Page two" route="/pages/two" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul> */}
        <ul className="sidebar__block">
          <SidebarLink
            icon={<NotesIcon />}
            title="Typical Notes"
            route="/notes"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            icon={<QuestionAnswerIcon />}
            title="Exam Questions"
            route="/questions"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            icon={<TestIcon />}
            title="Complete Exams"
            route="/exams"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            icon={<PersonCardDetailsIcon />}
            title="Profile"
            route="/profile"
            onClick={this.hideSidebar}
          />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
