import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Nav from "../components/Header/index";
import { Socials } from "../components/Socials";
import Tagline from "../components/Tagline";
import moment from "moment";

const propTypes = {
  data: PropTypes.object,
};

class Template extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;
    const { id, title, date, content, soundcloudLink } = post;

    return (
      <div>
        <Nav />
        <Socials />
        <Tagline />
        <div className="podcast">
          <h1 className="podcast__title">{title}</h1>
          <p className="podcast__date">{moment(date).format("M/D/YYYY")}</p>
          {soundcloudLink ? (
            <div
              className="podcast__audio"
              dangerouslySetInnerHTML={{
                __html: soundcloudLink.soundcloudLink,
              }}
            />
          ) : (
            <div className="podcast__no-audio">
              No SoundCloud Player available.
            </div>
          )}
          <div
            className="podcast__content"
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
          <Link
            className="podcast__back"
            to={
              this.props.location.state
                ? this.props.location.state.backToPodcasts
                : "/podcasts"
            }
          >
            Back to podcasts
          </Link>
        </div>
      </div>
    );
  }
}

export default Template;

export const postQuery = graphql`
  query blogPostQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      date(formatString: "MM-DD-YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
      soundcloudLink {
        soundcloudLink
      }
    }
  }
`;
