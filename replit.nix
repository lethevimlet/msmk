{ pkgs }: {
	deps = [
		pkgs.nodejs-16_x
    pkgs.nodePackages.typescript-language-server
    pkgs.gcc
    pkgs.python2
	];
}