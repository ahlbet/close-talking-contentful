import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import MediaElement from '../components/MediaElement';

const propTypes = {
  data: PropTypes.object
};

class Template extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;
    const { id, title, date, content, audio } = post;
    // const sources = [{src: {audio.file.url}, type: 'audio/mp3'}],
    const config = {};
    const tracks = {};

    return (
      <div>
        <div className="podcast">
          <h1 className="podcast__title">{title}</h1>
          <p className="podcast__date">{date}</p>
          {audio ? (
            <div className="podcast__audio">
              {/* <ReactAudioPlayer src={audio.file.url} controls /> */}
              {console.log(post)}
              <MediaElement
                id={post.title}
                mediaType="audio"
                src={post.audio.file.url}
                // sources={JSON.stringify(sources)}
                controls
                options={JSON.stringify(config)}
                tracks={JSON.stringify(tracks)}
                // style={audioStyles}
              />
            </div>
          ) : (
            <div className="podcast__no-audio">No audio</div>
          )}
          <div
            className="podcast__content"
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html
            }}
          />
          <Link className="podcast__back" to="/podcasts/">
            Back to blog
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
      date
      content {
        childMarkdownRemark {
          html
        }
      }
      audio {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`;
