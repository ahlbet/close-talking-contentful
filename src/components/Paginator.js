import React from 'react';

import { Link } from 'gatsby';

const NavLink = (props) => {
  if (!props.test) {
    return (
      <Link
        className={`${props.isActive && 'podcasts__paginate-links--current'}`}
        to={props.url}
      >
        {props.text}
      </Link>
    );
  } else {
    return null;
  }
};

const Paginator = (props) => {
  const { pageContext } = props;

  const { index, first, last, pageCount } = pageContext;

  console.log('index', index);

  const previousUrl =
    index - 1 == 1 ? '/podcasts/' : `/podcasts/${(index - 1).toString()}`;
  const nextUrl = `/podcasts/${(index + 1).toString()}`;

  const renderLeftEllipses = () => {
    if (index > 2) {
      return <span>...</span>;
    }
  };

  const renderRightEllipses = () => {
    if (index < pageCount - 2) {
      return <span>...</span>;
    }
  };

  const renderMiddleLeft = () => {
    if (index > 2) {
      return <NavLink url={`/podcasts/${index - 1}`} text={index - 1} />;
    }
  };

  const renderMiddleRight = () => {
    if (index < pageCount - 2) {
      return <NavLink url={`/podcasts/${index + 1}`} text={index + 1} />;
    }
  };

  const renderMiddleCurrent = () => {
    if (index > 1 && index < pageCount) {
      return <NavLink isActive url={`/podcasts/${index}`} text={index} />;
    }
  };

  const renderMiddle = () => {
    return (
      <div className="podcasts__paginate-links--middle">
        {renderLeftEllipses()}
        {renderMiddleLeft()}
        {renderMiddleCurrent()}
        {renderMiddleRight()}
        {renderRightEllipses()}
      </div>
    );
  };

  return (
    <div className="podcasts__paginate-links">
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Previous" />
      </div>

      <div>
        <NavLink isActive={index === 1} url="/podcasts/" text="1" />
      </div>

      <div>{renderMiddle()}</div>

      <div>
        <NavLink
          isActive={index === pageCount}
          url={`/podcasts/${pageCount}`}
          text={pageCount}
        />
      </div>

      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Next" />
      </div>
    </div>
  );
};

export default Paginator;
