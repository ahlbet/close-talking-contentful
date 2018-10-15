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
        <h1>{title}</h1>
        <p>{date}</p>
        {audio ? (
          <div>
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
          <div>No audio</div>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
        <Link to="/podcasts/">Back to podcasts</Link>
      </div>
    );
  }
}

export default Template;

export const postQuery = graphql`
  query podcastPostQuery($id: String!) {
    contentfulPodcast(id: { eq: $id }) {
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
