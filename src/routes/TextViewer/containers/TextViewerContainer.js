import { connect } from 'react-redux'
import TextViewer from '../components/TextViewer'

function mapStateToProps(state) {
  return { filePath: state.TextViewer.selectedFile.filePath }
}

export default connect(mapStateToProps)(TextViewer);
