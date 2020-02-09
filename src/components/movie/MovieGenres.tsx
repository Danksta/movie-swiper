import React from 'react';
import { AppText } from '../common';
import { theme } from '../../theme';
import { ViewStyle } from 'react-native';
import { MovieDetailed } from '../../api/types';

/* ------------- Props and State ------------- */
type Props = {
  detailedMovie: MovieDetailed;
  style: ViewStyle;
};

/* ------------- Class ------------- */
class MovieGenres extends React.PureComponent<Props> {
  generateGenresText = (genres: MovieDetailed['genres']) =>
    genres
      .map(genre => genre.name)
      .splice(0, 4)
      .reduce((acc, curr) => `${acc} · ${curr}`);

  render() {
    const { style, detailedMovie } = this.props;
    const { genres } = detailedMovie;

    return (
      genres && <AppText style={[style, { color: theme.gray.lighter }]}>{this.generateGenresText(genres)}</AppText>
    );
  }
}

export default MovieGenres;
