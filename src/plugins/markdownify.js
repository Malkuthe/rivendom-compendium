import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';

export default {
  install: (app, options) => {
    app.mixin({
      methods: {
        markdownify(string) {
          const processor = unified();
          processor.use(remarkParse);
          if (options && Array.isArray(options)) {
            for (let i = 0; i < options.length; i += 1) {
              processor.use(options[i]);
            }
          }
          processor.use(remarkRehype, { allowDangerousHtml: true });
          processor.use(rehypeRaw);
          processor.use(rehypeSanitize);
          processor.use(rehypeStringify);
          return processor.processSync(string).toString();
        },
      },
    });
  },
};
