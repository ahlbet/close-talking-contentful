import React, { Component } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { Socials } from "../components/Socials";
import Nav from "../components/Header/index";
import Tagline from "../components/Tagline";
import moment from "moment";

const NavLink = (props) => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return null;
  }
};

class Podcasts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (typeof twttr.widgets !== "undefined") {
      twttr.widgets.load();
    }
  }

  render() {
    const { group, index, first, last, pageCount } = this.props.pageContext;
    const previousUrl =
      index - 1 == 1 ? "/podcasts/" : `/podcasts/${(index - 1).toString()}`;
    const nextUrl = `/podcasts/${(index + 1).toString()}`;

    return (
      <div>
        <Nav />
        <Socials />
        <Tagline />
        <div className="podcasts">
          <div className="podcasts__main">
            <div className="podcasts__list-wrap">
              <h1 className="podcasts__heading">Podcasts</h1>
              <ul className="podcasts__list">
                {group.map((post) => (
                  <li className="podcasts__item" key={post.node.id}>
                    <Link
                      className="podcasts__item--link"
                      to={`/podcasts/${post.node.title
                        .replace(/[?!@#$%^&*]/g, "")
                        .replace(/\s+/g, "-")
                        .toLowerCase()}/`}
                      state={{
                        backToPodcasts:
                          index == 1 ? "/podcasts/" : `/podcasts/${index}`,
                      }}
                    >
                      {post.node.title}
                    </Link>
                    <p>{moment(post.node.date).format("M/D/YYYY")}</p>
                    <p className="podcasts__item--excerpt">
                      {post.node.content.childMarkdownRemark.excerpt}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="podcasts__info">
              <a
                className="twitter-timeline"
                href="https://twitter.com/CloseTalking?ref_src=twsrc%5Etfw"
                data-width="420"
                data-height="420"
              >
                Tweets by CloseTalking
              </a>
            </div>
          </div>
          <div className="podcasts__paginate-links">
            <div className="previousLink">
              <NavLink
                test={first}
                url={previousUrl}
                text="Go to Previous Page"
              />
            </div>
            <div className="nextLink">
              <NavLink test={last} url={nextUrl} text="Go to Next Page" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulPost(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          date(formatString: "MM-DD-YYYY")
          content {
            content
            childMarkdownRemark {
              html
              excerpt(pruneLength: 150)
            }
          }
          soundcloudLink {
            soundcloudLink
          }
        }
      }
    }
  }
`;

export default Podcasts;
