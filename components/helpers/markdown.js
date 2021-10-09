import React from "react";
var showdown  = require('showdown');
import sanitizeHtml from 'sanitize-html';
import parse, { domToReact } from 'html-react-parser';
import { Typography, Link } from '@mui/material';
const handler = {
    replace: (node) => {
        console.log(node.name);
        if (node.name === 'p') {
            return <React.Fragment> { domToReact(node.children, handler) } </React.Fragment>
        }
        if (node.name === 'strong' || node.name === "b") {
            return <Typography component="span" fontWeight="bold" fontStyle="inherit"> { domToReact(node.children, handler) } </Typography>
        }
        if (node.name === 'em' || node.name === "i") {
            return <Typography component="span" fontStyle="italic" fontWeight="inherit"> { domToReact(node.children, handler) } </Typography>
        }
        if (node.name === "h1" || node.name === "h2" || node.name === "h3" || node.name === "h4" || node.name === "h5" || node.name === "h6") {
            return <React.Fragment> { domToReact(node.children, handler) } </React.Fragment>
        }
        if (node.name === "a") {
            return <Link target="_blank" rel="noopener" rel="noreferrer" href={node.attribs.href} underline="hover"> { domToReact(node.children, handler) } </Link>
        }
    }
}
export default class Markdown extends React.Component {
    render() {
        var converterhtml = (new showdown.Converter())
        converterhtml.setOption('strikethrough',true)
        converterhtml.setOption('simplifiedAutoLink',true)
        converterhtml.setOption('backslashEscapesHTMLTags',true)
        converterhtml.setOption('emoji',true)
        converterhtml.setOption('underline',true)
        var html = converterhtml.makeHtml(this.props.children);
        console.log(html)
        html = sanitizeHtml(html, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'del' ])
          })
        console.log(html)
        var data = parse(html, handler)
        return data
    }
}