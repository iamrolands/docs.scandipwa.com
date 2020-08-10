/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
// import HeaderLink from './HeaderLink';
import {Link} from 'gatsby';
import React from 'react';
import {colors, fonts, media} from 'theme';
// import {version} from 'site-constants';
import ExternalLinkSvg from 'templates/components/ExternalLinkSvg';
// import DocSearch from './DocSearch';
import { Search } from './../Search/Search'

// $FlowFixMe
// import navHeader from '../../../content/headerNav.yml';

// import logoSvg from 'icons/logo.png';

const Header = ({location}: {location: Location}) => (
  <header
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      top: 0,
      left: 0,
      '@media print': {
        display: 'none',
      },
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 60,
          [media.between('small', 'large')]: {
            height: 50,
          },
          [media.lessThan('small')]: {
            height: 40,
          },
        }}>
        <Link
          css={{
            display: 'flex',
            marginRight: 10,
            height: '100%',
            alignItems: 'center',
            color: colors.brand,

            ':focus': {
              outline: 0,
              color: colors.white,
            },

            [media.greaterThan('small')]: {
              width: 'calc(100% / 6)',
            },
            [media.lessThan('small')]: {
              flex: '0 0 auto',
            },
          }}
          to="/">
          {/* <img src={logoSvg} alt="" width="150" /> */}
          <div css={{paddingTop: 20}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="170" height="100%" viewBox="0 0 206 50">
                  <g fill="none" fillRule="evenodd">
                  <path fill={colors.brand}
                  d="M149.62 29.165c-.043-.098-.074-.2-.13-.288-1.283-1.975-2.568-3.945-3.851-5.918-.027-.04-.047-.085-.078-.144l4.036-11.133c1.506 2.667 2.978 5.272 4.494 7.959l6.383-17.502h6.185l5.889 17.366c.068.013.08.02.091.015.012-.002.023-.013.03-.023.034-.064.071-.128.102-.192l8.167-17.121c.004-.01.016-.02.039-.045h7.994c-.04.109-.066.208-.11.3-1.247 2.766-2.497 5.532-3.743 8.298-1.348 2.986-2.689 5.976-4.034 8.964-1.367 3.03-2.737 6.062-4.102 9.094-.054.119-.086.247-.126.37h-8.035c-.027-.138-.039-.282-.085-.415-.9-2.581-1.805-5.163-2.708-7.742-.67-1.911-1.338-3.822-2.005-5.733l-.606-1.73a.81.81 0 0 0-.22.34c-.356.974-.708 1.95-1.065 2.923-1.122 3.056-2.244 6.114-3.37 9.17-.392 1.064-.792 2.125-1.189 3.187h-7.953zM137.8 2.127c1.573.008 3.115.24 4.58.782 1.694.628 3.031 1.635 4.048 3.048-1.617 4.463-3.24 8.944-4.866 13.427-.447.171-.911.222-1.368.296-.898.146-1.808.169-2.718.169h-4.934c-.01.175-.023.315-.023.453v7.716c0 .38-.008.764-.01 1.147h-7.632c.004-.144.01-.286.01-.43l.001-13.08V2.13c.094-.006.156-.013.22-.013 4.23 0 8.463-.01 12.693.01zm-4.988 5.214c-.087 0-.175.02-.274.031v7.251c.127.014.204.03.282.03.885 0 1.77.019 2.652-.006.665-.022 1.331-.047 1.988-.185 1.243-.264 2.12-.896 2.518-1.99.373-1.029.387-2.069-.054-3.09-.348-.797-.963-1.368-1.86-1.683-.72-.249-1.476-.338-2.238-.352-1.004-.017-2.009-.006-3.014-.006zM196.78 29.165c-.026-.103-.035-.21-.076-.31-.591-1.48-1.188-2.964-1.785-4.445-.01-.022-.029-.04-.076-.098-.122-.006-.278-.017-.433-.017-3.28-.002-6.56-.002-9.839-.002-.157 0-.315-.006-.53-.01.777-1.765 1.533-3.482 2.301-5.22h6.694l-3.175-7.96 3.956-8.952.43 1.01c1.928 4.579 3.858 9.155 5.787 13.733 1.66 3.94 3.316 7.883 4.977 11.823.054.13.134.251.204.376-.014.025-.026.068-.041.07-.107.003-.214.002-.32.002h-8.074z">
                  </path>
                  <path fill="#fff"
                  d="M3.088 3.463c1.915-1.363 4.35-2.044 7.308-2.044 3.522 0 6.543.72 9.063 2.16v6.555c-2.316-1.747-5.142-2.597-8.484-2.544-2.288.025-3.433.604-3.433 1.734 0 .54.348 1.022 1.042 1.446.694.426 1.561.785 2.603 1.079 1.04.297 2.166.694 3.373 1.197 1.209.5 2.335 1.06 3.375 1.676 1.042.618 1.909 1.497 2.603 2.642.694 1.145 1.042 2.461 1.042 3.954 0 5.5-3.6 8.25-10.797 8.25-3.935 0-7.393-.822-10.374-2.466v-6.75c2.955 2.031 6.233 3.046 9.833 3.046 1.439 0 2.467-.134 3.085-.404.617-.27.926-.739.926-1.408 0-.694-.482-1.298-1.447-1.811-.964-.516-2.134-.998-3.509-1.447a41.922 41.922 0 0 1-4.127-1.6c-1.374-.618-2.544-1.555-3.509-2.815-.964-1.26-1.446-2.776-1.446-4.55 0-2.57.958-4.538 2.873-5.9M26.757 12.448c2.096-1.722 4.61-2.584 7.539-2.584 2.031 0 3.933.424 5.707 1.274v5.59a9.249 9.249 0 0 0-4.704-1.273c-1.44 0-2.622.348-3.548 1.042-.925.694-1.39 1.773-1.39 3.239 0 1.388.465 2.442 1.39 3.16.926.722 2.069 1.082 3.431 1.082 1.904 0 3.573-.412 5.014-1.235v5.591c-1.98.825-4.1 1.235-6.363 1.235-2.828 0-5.239-.803-7.231-2.41-1.991-1.607-2.988-3.953-2.988-7.038 0-3.392 1.047-5.95 3.143-7.673M49.715 24.614c.41.348.95.521 1.62.521 1.156 0 2.173-.32 3.046-.964v-2.508c-.695-.23-1.478-.346-2.353-.346-1.953 0-2.93.669-2.93 2.004 0 .515.205.945.617 1.293m12.494.25c.257 0 .502-.038.733-.116v4.05c-.978.386-2.084.579-3.317.579-2.056 0-3.522-.68-4.397-2.045-1.901 1.493-4.05 2.237-6.438 2.237-1.826 0-3.356-.513-4.59-1.543-1.235-1.027-1.85-2.415-1.85-4.164 0-1.106.244-2.076.732-2.91.488-.836 1.137-1.474 1.948-1.91a10.167 10.167 0 0 1 2.545-.964c.886-.206 1.817-.309 2.795-.309 1.388 0 2.726.142 4.01.424v-.655c0-.694-.328-1.254-.983-1.678-.655-.424-1.614-.635-2.871-.635-1.954 0-4.114.476-6.48 1.426v-5.515c2.52-.822 4.922-1.232 7.21-1.232 3.163 0 5.566.655 7.213 1.965 1.644 1.312 2.467 3.534 2.467 6.672v5.167c0 .772.425 1.157 1.273 1.157M76.97 9.903c2.416 0 4.255.713 5.515 2.14 1.26 1.425 1.89 3.247 1.89 5.457v11.491h-6.556V18.387c0-.951-.258-1.672-.771-2.16-.516-.488-1.196-.733-2.046-.733-1.26 0-2.313.54-3.16 1.62V28.99h-6.556v-18.51h5.784v2.12c1.672-1.798 3.637-2.698 5.9-2.698M100.176 15.976c-.668-.449-1.427-.675-2.274-.675-1.287 0-2.269.438-2.951 1.31-.68.876-1.02 1.916-1.02 3.125s.34 2.249 1.02 3.124c.682.873 1.664 1.31 2.95 1.31.848 0 1.607-.224 2.275-.675.669-.449 1.157-.997 1.466-1.638v-4.242c-.309-.642-.797-1.19-1.466-1.639zm8.021-13.98v26.995h-5.783v-2.508c-.515.875-1.307 1.608-2.372 2.199-1.067.591-2.372.886-3.915.886-1.491 0-2.827-.281-4.01-.847-1.182-.566-2.12-1.324-2.815-2.275-.694-.952-1.221-2-1.58-3.143a11.82 11.82 0 0 1-.541-3.567c0-1.235.18-2.424.54-3.567.36-1.144.887-2.191 1.58-3.144.697-.95 1.634-1.709 2.815-2.274 1.184-.566 2.52-.848 4.01-.848 2.342 0 4.179.694 5.516 2.082V1.997h6.555zM112.161 28.99h6.555V10.48h-6.555v18.51zm5.957-22.038c-.706.605-1.6.908-2.68.908s-1.972-.303-2.68-.908c-.708-.604-1.06-1.51-1.06-2.717 0-1.184.36-2.077 1.08-2.681.719-.605 1.607-.906 2.66-.906 1.08 0 1.974.301 2.68.906.707.604 1.061 1.497 1.061 2.68 0 1.208-.354 2.114-1.061 2.718z">
                </path>
                </g>
            </svg>
          </div>
        </Link>

        {/* <nav
          css={{
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            overflowX: 'auto',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            height: '100%',

            // Hide horizontal scrollbar
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },

            [media.size('xsmall')]: {
              flexGrow: '1',
              width: 'auto',
            },
            [media.greaterThan('xlarge')]: {
              width: null,
            },
            [media.lessThan('small')]: {
              maskImage:
                'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
            },
          }}>
          {navHeader.items.map(link => (
            <HeaderLink
              key={link.title}
              isActive={location.pathname.includes(link.activeSelector)}
              title={link.title}
              to={link.to}
            />
          ))}
        </nav> */}

        

        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: 'auto',

            [media.lessThan('medium')]: {
            width: 'auto',
            },
            [media.greaterThan('large')]: {
            width: 'calc(100% / 4)',
            },
          }}>
            {/* <DocSearch /> */}
            <Search />
          {/* <Link
            css={{
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              ...fonts.small,

              ':hover': {
                color: colors.brand,
              },

              ':focus': {
                outline: 0,
                backgroundColor: colors.lighter,
                borderRadius: 15,
              },

              [media.lessThan('medium')]: {
                display: 'none',
              },
            }}
            to="/versions">
            v{version}
          </Link> */}

          <a
            css={{
              padding: '5px 10px',
              marginLeft: 10,
              whiteSpace: 'nowrap',
              ...fonts.small,

              ':hover': {
                color: colors.brand,
              },

              ':focus': {
                outline: 0,
                backgroundColor: colors.lighter,
                borderRadius: 15,
              },

              // [media.lessThan('large')]: {
              //   display: 'none',
              // },
            }}
            href="https://github.com/scandipwa/docs.scandipwa.com/"
            target="_blank"
            rel="noopener">
            GitHub
            <ExternalLinkSvg
              cssProps={{
                marginLeft: 5,
                verticalAlign: -2,
                color: colors.subtle,
              }}
            />
          </a>
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
